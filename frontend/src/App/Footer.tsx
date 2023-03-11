import React, { useCallback, useState } from 'react';
import { Container, Image, Card, Button } from 'react-bootstrap';
import FormForLawyer from './FormForLawyer';

function Footer(): JSX.Element {
  const [showForm, setShowForm] = useState(false);

  const handleClick = (): void => {
    setShowForm((p) => !p);
  };

  const handlerForm: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      console.log(111);
    },
    [],
  );

  return (
    <Container id="law-ancor" className="container-footer">
      <Image className="footer-img" src="/SVG/footer.svg" alt="svg" />
      <Container className="container-footer-colunm">
        <Card.Text className="footer-text">
          Мы всегда рады специалистам, которые относятся к профессии так же
          трепетно и бережно, как и мы.
        </Card.Text>
        <Image src="/SVG/icons-contacts.svg" />
      </Container>
      <Container className="container-flex-colunm">
        <Button
          className="button-blue"
          onClick={handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={showForm}
        >
          Заполнить анкету
        </Button>
        {showForm && (
          <FormForLawyer onSubmitForm={handlerForm} onClose={handleClick} />
        )}
      </Container>
    </Container>
  );
}

export default Footer;
