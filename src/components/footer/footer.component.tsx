import "../../App.css";

export function FooterComponent() {
  const termosDeUso = "termosDeUso";
  const politicasDePrivacidade = "politicasDePrivacidade";
  const historia = "historia";
  const nomeProduto = "Venda em 48 Horas";

  return (
    <footer className="footer">
      <h2>PIRATARIA É CRIME</h2>
      <p>
        A venda do Projeto {nomeProduto} só pode ser realizada através deste
        site, registrado em nome de Info Makers LTDA. Qualquer outro site
        Copyright 2021 - Info Makers LTDA * onde você encontre este programa é
        uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse
        conteúdos ilegais ou pirateados. NÃO adquira programas parecidos e que
        não são baseados em anos de estudo da psicologia comportamental.Não nos
        responsabilizamos por compras realizadas em outros sites.
      </p>
      <div>
        <a href={termosDeUso}>Termos de Uso</a>
        {"  |  "}
        <a href={politicasDePrivacidade}>Políticas de Privacidade</a>
        {"  |  "}
        <a href={historia}>Nossa História </a>
      </div>
    </footer>
  );
}
