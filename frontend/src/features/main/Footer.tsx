import React, { useCallback, useState } from 'react';
import { Container, Image, Card, Button } from 'react-bootstrap';
import FormForLawyer from '../lawyers/FormForLawyer';
import * as api from '../lawyers/api';
import { Link } from 'react-router-dom';

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
    <Container id="law-ancor" className="container-footer">
      <Image className="footer-img" src="/SVG/footer.svg" alt="svg" />
      <Container className="container-footer-colunm">
        <Card.Text className="footer-text">
          Мы всегда рады специалистам, которые относятся к людям так же трепетно
          и бережно, как и мы.
        </Card.Text>
        <Container className="icons-con">
          <Link to="https://t.me/savorskaya" target="_blank">
            <Image className="icon" src="/SVG/icons-tg.svg" />
          </Link>
          <Link to="/" target="_blank">
            <Image className="icon" src="/SVG/icons-inst.svg" />
          </Link>
          <Link to="/" target="_blank">
            <Image className="icon" src="/SVG/icons-vk.svg" />
          </Link>
        </Container>
      </Container>
      <Container className="container-flex-colunm">
        {showForm ? (
          <FormForLawyer setShowForm={setShowForm} onSubmitForm={handlerForm} />
        ) : (
          <Button
            className="button-blue btn-lawyer"
            onClick={handleClick}
            aria-controls="example-collapse-text"
            aria-expanded={showForm}
          >
            Заполнить анкету
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default Footer;
