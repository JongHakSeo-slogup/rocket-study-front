<script>
import { Label, Button, Col, FormGroup, Input, Row } from "sveltestrap";
import { form } from "svelte-forms";

export let handleNext;
export let isClickableNext = false;

let certType = "phone";

let phoneNo = "";
let email = "";

const lengthCheck = (value) => ({
  valid: value.length === 11,
  name: "lengthCheck",
});

$: authForm = form(
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
  certType = e.target.value;
  phoneNo = "";
  email = "";
};

const requestCert = (e) => {
  authForm.validate();

  if (authForm.fields.phone.errors) {
    console.log("send");
  }
};

$: {
  console.log(certType);
  console.log($authForm.fields.phone.errors);
  console.log($authForm.fields.email.errors);
  console.log(phoneNo, email);
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

<Row class="fluid pb-5">
  <Col class="mx-auto pt-5" xs="5">
    <div style="display: flex; justify-content: space-between">
      <Col style="margin-right: 16px" xs="7">
        <Input />
      </Col>
      <Button class="bg-warning" on:click={requestCert}>인증번호 받기</Button>
    </div>
  </Col>
</Row>
<Row class="fluid pb-5">
  <Col class="mx-auto pt-5" xs="5">
    <Button disabled={!isClickableNext} class="bg-primary" on:click={handleNext}
      >다음으로</Button>
  </Col>
</Row>
