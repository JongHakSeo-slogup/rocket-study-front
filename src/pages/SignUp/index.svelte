<script>
import Terms from "./Process/Terms/index.svelte";
import Auth from "./Process/Auth/index.svelte";

let optionalAgreeTerms = [];
let isNecessaryChecked = false;
let processIndex = 1;

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
{/if}
{#if processIndex === 1}
  <Auth handleNext={handleNext} isClickableNext={isNecessaryChecked} />
{/if}
