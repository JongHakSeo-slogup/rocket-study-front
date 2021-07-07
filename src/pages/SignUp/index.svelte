<script>
import Terms from "./Process/Terms/index.svelte";
import Auth from "./Process/Auth/index.svelte";
import Form from "./Process/Form/index.svelte";
import Complete from "./Process/Complete/index.svelte";
import { requestSignUp } from "../../apis/auth";

let authToken = "";
let userId = "";
let certType = "phone";
let optionalAgreeTerms = [];
let isNecessaryChecked = false;
let processIndex = 0;

const setAuthToken = (token) => (authToken = token);

const setUserId = (id) => (userId = id);

const setCertType = (type) => (certType = type);

const handleCheckNecessary = (e) => {
  if (e.target.checked !== undefined) {
    isNecessaryChecked = e.target.checked;
  }
};

const handleCheckOptional = (e) => {
  const { value } = e.target;
  if (e.target.checked) {
    optionalAgreeTerms = [...optionalAgreeTerms, value];
  } else {
    optionalAgreeTerms = optionalAgreeTerms.filter((item) => item !== value);
  }
};

const handleNext = () => {
  processIndex += 1;
};

const handleSignUp = async (userName, password) => {
  try {
    const res = await requestSignUp(
      userId,
      password,
      userName,
      optionalAgreeTerms,
      authToken
    );
    console.log(res);
  } catch (e) {
    alert(e.msg);
  }
  handleNext();
};

$: {
  console.log(optionalAgreeTerms);
}
</script>

{#if processIndex === 0}
  <Terms
    handleNext={handleNext}
    isClickableNext={isNecessaryChecked}
    handleCheckNecessary={handleCheckNecessary}
    handleCheckOptional={handleCheckOptional} />
{:else if processIndex === 1}
  <Auth
    certType={certType}
    setCertType={setCertType}
    setAuthToken={setAuthToken}
    setUserId={setUserId}
    handleNext={handleNext} />
{:else if processIndex === 2}
  <Form handleSignUp={handleSignUp} userId={userId} />
{:else if processIndex === 3}
  <Complete />
{/if}
