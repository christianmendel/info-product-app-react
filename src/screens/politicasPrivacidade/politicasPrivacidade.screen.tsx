import "../../App.css";
import { FooterComponent } from "../../components/footer/footer.component";

export function PoliticasPrivacidadeScreen() {
  const nomeProduto = "Venda em 48 Horas";

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            <span className="red_rose">Políticas de Privacidade</span>
          </h1>
        </header>

        <div>
          <p>Caro usuário,</p>
          <p>
            Ao usar um serviço ou plataforma on-line, é importante que você
            esteja ciente dos termos de uso que regem seu uso desses serviços.
            Os termos de uso são um contrato legal entre você e a empresa que
            fornece o serviço, e eles descrevem as regras e regulamentos que
            regem seu uso do serviço.
          </p>
          <p>
            Os termos de uso devem incluir informações como o propósito do
            serviço, a descrição do serviço e suas limitações, direitos e
            obrigações das partes envolvidas, informações sobre direitos
            autorais e marcas registradas, políticas de privacidade, entre
            outras informações relevantes.
          </p>
          <p>
            Ao usar um serviço, você concorda em cumprir os termos de uso. É
            importante ler cuidadosamente os termos de uso antes de começar a
            usar o serviço, para que você possa entender as regras e obrigações
            que se aplicam ao seu uso do serviço.
          </p>
          <p>
            Se houver alguma dúvida sobre os termos de uso, é importante entrar
            em contato com a empresa para obter esclarecimentos. Você também
            pode considerar consultar um advogado para ajudá-lo a entender os
            termos de uso, especialmente se houver cláusulas que você não
            entende ou não concorda.
          </p>
          <p>
            Em resumo, os termos de uso são um contrato legal que regem seu uso
            de um serviço ou plataforma on-line. Ao usar um serviço,
            certifique-se de ler cuidadosamente os termos de uso e cumprir as
            regras e obrigações descritas neles.
          </p>
          <p>
            Atenciosamente, <strong>Eq. {nomeProduto}</strong>
          </p>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
}
