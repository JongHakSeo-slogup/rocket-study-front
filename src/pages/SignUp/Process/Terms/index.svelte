<script>
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardText,
  CardTitle,
  CardBody,
  CardSubtitle,
  Button,
  FormCheck,
  CardFooter,
} from "sveltestrap";
import { PRIVATE_TEMRS } from "../../../../constants/terms/index";

export let handleCheckNecessary;
export let handleCheckOptional;
export let handleNext;
export let isClickableNext = false;
</script>

<Row class="fluid">
  <Col class="mx-auto pt-5" xs="10">
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>필수약관</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle>개인정보 수집 및 이용</CardSubtitle>
        <CardText
          class="pb-3 mt-3"
          style="white-space: pre-wrap; max-height: 150px; overflow: auto;"
          >{PRIVATE_TEMRS}</CardText>
      </CardBody>
      <CardFooter>
        <div style="display: flex">
          <FormCheck on:change={handleCheckNecessary} />동의합니다. *
        </div></CardFooter>
    </Card>
  </Col>
</Row>
<Row class="fluid">
  <Col class="mx-auto pt-5" xs="10">
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>선택약관</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle>마케팅 정보 수집 및 이용</CardSubtitle>
        <CardText
          class="pb-3 mt-3"
          style="white-space: pre-wrap; max-height: 150px; overflow: auto;"
          >{PRIVATE_TEMRS}</CardText>
        <CardFooter style="border: none">
          <div style="display: flex">
            <FormCheck
              value="OT02932"
              on:change={handleCheckOptional} />동의합니다.
          </div>
        </CardFooter>
      </CardBody>
      <CardBody>
        <CardSubtitle>이벤트 관련 정보 이메일 발송</CardSubtitle>
        <CardText
          class="pb-3 mt-3"
          style="white-space: pre-wrap; max-height: 150px; overflow: auto;">
          {PRIVATE_TEMRS}
        </CardText>
        <CardFooter style="border: none">
          <div style="display: flex">
            <FormCheck
              value="OT02842"
              on:change={handleCheckOptional} />동의합니다.
          </div>
        </CardFooter>
      </CardBody>
    </Card>
  </Col>
</Row>
<Row class="fluid pb-5">
  <Col class="mx-auto pt-5" xs="10">
    <Button disabled={!isClickableNext} class="bg-primary" on:click={handleNext}
      >다음으로</Button>
  </Col>
</Row>
