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
import { PRIVATE_TEMRS } from "../../constants/terms/index";

let handleCheckNecessary = () => {};
</script>

<Row class="fluid">
  <Col class="mx-auto pt-5" xs="6">
    <Card class="mb-3">
      <CardHeader>
        <CardTitle>필수약관</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle>개인정보 수집 및 이용</CardSubtitle>
        <CardText
          class="pt-3 pb-3 mt-3 mb-3"
          style="white-space: pre-wrap; max-height: 200px; overflow: auto;"
          >{PRIVATE_TEMRS}</CardText>
        <div style="display: flex">
          <FormCheck on:check={handleCheckNecessary} />동의합니다.
        </div>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </Col>
</Row>
<Row>1</Row>
<Row>1</Row>
