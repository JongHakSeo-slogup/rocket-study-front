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
import { authToken } from "../../../../store";

export let userId;
export let handleSignUp;

let password = "";
let passwordRepeat = "";
let userName = "";
let isLoading = false;

const equal = (value) => ({ valid: value === password, name: "equal" });

const signUpForm = form(
  () => ({
    password: {
      value: password,
      validators: ["required", "between:8:20"],
    },
    passwordRepeat: {
      value: passwordRepeat,
      validators: ["required", "between:8:20", equal],
    },
    userName: {
      value: userName,
      validators: ["required"],
    },
  }),
  {
    initCheck: false,
    validateOnChange: false,
  }
);

const handleClickSighUp = async () => {
  signUpForm.validate();

  if ($signUpForm.valid) {
    isLoading = true;
    authToken.set("");
    try {
      await handleSignUp(userName, password);
    } catch (e) {
      isLoading = false;
    }
  }
};
</script>

<Row class="fluid">
  <Col class="mx-auto pt-5" xs="5">
    <FormGroup>
      <Label for="userId">ID</Label>
      <Input type="text" name="userId" id="userId" disabled value={userId} />
    </FormGroup>
    <FormGroup>
      <Label for="passwordRepeat">이름</Label>
      <Input
        bind:value={userName}
        disabled={isLoading}
        maxlength="10"
        invalid={$signUpForm.fields.userName.errors.length > 0}
        type="text"
        name="userName"
        id="userName"
        placeholder="이름을 입력해주세요." />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input
        bind:value={password}
        disabled={isLoading}
        maxlength="20"
        invalid={$signUpForm.fields.password.errors.length > 0}
        type="password"
        name="password"
        id="password"
        placeholder="8~20글자의 비밀번호를 입력해주세요." />
    </FormGroup>
    <FormGroup>
      <Label for="passwordRepeat">Password</Label>
      <Input
        bind:value={passwordRepeat}
        disabled={isLoading}
        maxlength="20"
        invalid={$signUpForm.fields.passwordRepeat.errors.length > 0}
        type="password"
        name="passwordRepeat"
        id="passwordRepeat"
        placeholder="비밀번호를 다시 한 번 입력해주세요." />
    </FormGroup>
  </Col>
</Row>

<Row class="fluid pb-5">
  <Col class="mx-auto pt-5" xs="5">
    <div style="display: flex; justify-content: space-between">
      <!--{#if isRequestAuthNum}-->
      <!--        <Col style="margin-right: 16px" xs="7">-->
      <!--          <Input bind:value={authNum} disabled={isLoading} />-->
      <!--        </Col>-->
      <!--      {/if}-->
      {#if isLoading}
        <Spinner color="info" />
      {:else}
        <Button class="bg-warning" on:click={handleClickSighUp}
          >가입하기</Button>
      {/if}
    </div>
  </Col>
</Row>
