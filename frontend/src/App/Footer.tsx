import React, { useCallback, useState } from 'react';
import { Container, Image, Card, Button } from 'react-bootstrap';
import FormForLawyer from '../features/lawyers/FormForLawyer';
import * as api from '../features/lawyers/api';
 
function Footer(): JSX.Element {
  const [showForm, setShowForm] = useState(false);

  const handleClick = (): void => {
    setShowForm((p) => !p);
  };

  const handlerForm: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
     
    },
    [],
  );

  return (
    <Container className="container-footer">
      <Image className="footer-img" src="/SVG/footer.svg" alt="svg" />
      <Container className="container-footer-colunm">
        <Card.Text className="footer-text">
          Мы всегда рады специалистам, которые относятся к профессии так же
          трепетно и бережно, как и мы.
        </Card.Text>
        <Image src="/SVG/icons-contacts.svg" />
      </Container>
      <Container className="container-footer-colunm">
        <Button className="button-blue" onClick={handleClick}>
          Заполнить анкету
        </Button>
        {showForm && (
          <FormForLawyer setShowForm={setShowForm} onSubmitForm={handlerForm}  />
        )}
      </Container>
    </Container>
  );
}

export default Footer;
