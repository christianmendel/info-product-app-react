import "../../App.css";
import { FooterComponent } from "../../components/footer/footer.component";

export function TermosUsoScreen() {
  const nomeProduto = "Venda em 48 Horas";

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            <span className="red_rose">Termos de Uso</span>
          </h1>
        </header>

        <div>
          <p>
            As políticas de privacidade são documentos que descrevem como as
            empresas ou organizações coletam, armazenam e usam informações
            pessoais de seus usuários. Essas informações podem incluir nome,
            endereço, número de telefone, endereço de e-mail, informações de
            pagamento e outras informações pessoais que possam ser usadas para
            identificar um indivíduo.
          </p>
          <p>
            As políticas de privacidade são importantes porque fornecem
            transparência e clareza sobre como as informações dos usuários são
            coletadas e usadas. Elas são necessárias para que os usuários possam
            tomar decisões informadas sobre como compartilhar suas informações
            pessoais. Além disso, as políticas de privacidade ajudam a proteger
            os usuários de práticas de coleta e uso de informações enganosas ou
            prejudiciais.
          </p>
          <p>
            As empresas devem fornecer políticas de privacidade claras e fáceis
            de entender para seus usuários. As políticas de privacidade devem
            descrever como as informações pessoais são coletadas, como são
            usadas e compartilhadas, e como os usuários podem controlar suas
            informações pessoais. As empresas também devem informar aos usuários
            como protegem as informações pessoais e quais medidas de segurança
            são tomadas para protegê-las contra acesso não autorizado.
          </p>
          <p>
            Os usuários devem sempre ler as políticas de privacidade
            cuidadosamente antes de compartilhar suas informações pessoais com
            uma empresa. Eles devem estar cientes de quais informações estão
            compartilhando, como essas informações serão usadas e como podem
            controlar o uso de suas informações pessoais.
          </p>
          <p>
            Em resumo, as políticas de privacidade são importantes para garantir
            a proteção da privacidade dos usuários e fornecer transparência
            sobre a coleta e uso de informações pessoais pelas empresas. Os
            usuários devem estar cientes de suas políticas de privacidade e
            tomar medidas para controlar o uso de suas informações pessoais.
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
