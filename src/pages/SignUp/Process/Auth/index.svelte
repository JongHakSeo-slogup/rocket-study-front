<script>
import {
  Spinner,
  Label,
  Button,
  Col,
  FormGroup,
  Input,
  Row,
} from "sveltestrap";
import { form } from "svelte-forms";
import {
  requestAuthNumber,
  requestAuthNumberToken,
} from "../../../../apis/auth";

export let setUserId;
export let setAuthToken;
export let handleNext;
export let setCertType;
export let certType = "phone";

let isLoading = false;
let isRequestAuthNum = false;

let phoneNo = "";
let email = "";
let authNum = "";

const lengthCheck = (value) => ({
  valid: value.length === 11,
  name: "lengthCheck",
});

const authForm = form(
  () => ({
    phone: {
      value: phoneNo,
      validators: [lengthCheck],
      enable: certType === "phone",
    },
    email: {
      value: email,
      validators: ["email"],
      enable: certType === "email",
    },
  }),
  {
    initCheck: false,
    validateOnChange: false,
  }
);

const handleChangeType = (e) => {
  setCertType(e.target.value);
  phoneNo = "";
  email = "";
};

const requestCert = async () => {
  authForm.validate();
  let isValid = false;
  if (certType === "phone") {
    if ($authForm.fields.phone.errors.length === 0) {
      isValid = true;
    }
  }
  if (certType === "email") {
    if ($authForm.fields.email.errors.length === 0) {
      isValid = true;
    }
  }
  if (isValid) {
    try {
      const result = await requestAuthNumber(certType, phoneNo, email);
      console.log(result);
      alert(result.authNum);
      isRequestAuthNum = true;
    } catch (e) {
      console.error(e);
      alert(e.msg);
    }
  }
};

const checkAuthNumber = async () => {
  isLoading = true;
  try {
    const { msg, token } = await requestAuthNumberToken(
      certType,
      phoneNo,
      email,
      authNum
    );
    alert(msg);
    setAuthToken(token);
    if (certType === "phone") {
      setUserId(phoneNo);
    } else {
      setUserId(email);
    }
    handleNext();
  } catch (e) {
    alert(e.msg);
  } finally {
    isLoading = false;
  }
};

$: if (authNum.length === 6) {
  checkAuthNumber();
}
</script>

<Row class="fluid">
  <Col class="mx-auto pt-5" xs="5">
    <FormGroup>
      <Label for="exampleSelect">인증타입</Label>
      <Input
        type="select"
        name="select"
        id="exampleSelect"
        on:change={handleChangeType}>
        <option value="phone">휴대폰</option>
        <option value="email">이메일</option>
      </Input>
    </FormGroup>
    {#if certType === "phone"}
      <FormGroup>
        <Label for="phoneNumber">휴대폰 번호</Label>
        <Input
          bind:value={phoneNo}
          maxlength="11"
          invalid={$authForm.fields.phone.errors.length > 0}
          type="tel"
          name="number"
          id="phoneNumber"
          placeholder="- 없이 숫자만 입력하세요" />
      </FormGroup>
    {/if}
    {#if certType === "email"}
      <FormGroup>
        <Label for="emailAddress">이메일</Label>
        <Input
          bind:value={email}
          invalid={$authForm.fields.email.errors.length > 0}
          type="email"
          name="email"
          id="emailAddress"
          placeholder="유효한 이메일을 입력해주세요" />
      </FormGroup>
    {/if}
  </Col></Row>

<Row class="fluid pb-2">
  <Col class="mx-auto pt-1" xs="5">
    <div style="display: flex; justify-content: space-between">
      {#if isLoading}
        <Spinner color="info" />
      {/if}
      {#if !isLoading}
        <Button class="bg-warning" on:click={requestCert}>인증번호 받기</Button>
      {/if}
    </div>
  </Col>
</Row>
{#if isRequestAuthNum}
  <Row class="fluid pb-5">
    <Col class="mx-auto pt-5" xs="5">
      <div style="display: flex; justify-content: space-between">
        <Col style="margin-right: 16px" xs="7">
          <label>
            <Input
              bind:value={authNum}
              disabled={isLoading}
              placeholder="인증번호 6자리" />
          </label>
        </Col>
        <Button
          class="bg-primary"
          on:click={checkAuthNumber}
          disabled={authNum.toString().length !== 6}>확인</Button>
      </div>
    </Col>
  </Row>
{/if}
