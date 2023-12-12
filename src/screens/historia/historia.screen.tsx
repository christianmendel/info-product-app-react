import "../../App.css";
import { FooterComponent } from "../../components/footer/footer.component";

export function HistoriaScreen() {
  const nomeProduto = "ReCapilar Folixil";

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            <span className="red_rose">
              Nossa História - A Jornada ReCapilar Folixil
            </span>
          </h1>
        </header>

        <div>
          <p>
            A história de ReCapilar Folixil é a história de uma solução. Uma
            resposta a um problema que afeta milhões de pessoas em todo o mundo:
            a calvície.
          </p>
          <p>
            Tudo começou com um único homem, nosso fundador, João Carlos. Como
            muitos de vocês, João estava lutando contra a queda de cabelo desde
            jovem. Depois de tentar inúmeros tratamentos caros e ineficazes, ele
            percebeu que havia um vazio no mercado para uma solução eficaz e
            acessível para a calvície.
          </p>
          <p>
            João sempre foi fascinado pela ciência e nutrição, e ele sabia que a
            resposta para o crescimento saudável do cabelo tinha que estar em
            nosso próprio corpo - em nutrir e cuidar de nós mesmos da maneira
            certa. Então, ele decidiu fazer algo a respeito.
          </p>
          <p>
            Em 2020, depois de anos de pesquisa, experimentos e testes, João
            finalmente desenvolveu uma fórmula única - um blend potente e
            natural de vitaminas, minerais e nutrientes essenciais que promovem
            o crescimento do cabelo. Assim nasceu o ReCapilar Folixil.
          </p>
          <p>
            A visão de João era criar um produto que não apenas ajudasse a
            combater a calvície, mas que também promovesse um estilo de vida
            mais saudável e consciente. Uma abordagem que entendesse que a saúde
            do nosso cabelo está intimamente ligada à nossa saúde geral.
          </p>
          <p>
            ReCapilar Folixil não é apenas um produto. É a manifestação da
            crença de que cada um de nós merece se sentir bem consigo mesmo, que
            cada um de nós merece a confiança que vem com a saúde e a
            vitalidade. Nosso compromisso é ajudar as pessoas a reconquistar não
            apenas seus cabelos, mas também sua autoestima e sua alegria de
            viver.
          </p>
          <p>
            Hoje, estamos orgulhosos de ver que o ReCapilar Folixil já ajudou
            milhares de pessoas em todo o Brasil a combater a calvície e a
            restaurar a saúde dos seus cabelos. Mas esta é apenas a primeira
            parte da nossa missão. Estamos constantemente pesquisando e inovando
            para trazer as melhores soluções para nossos clientes.
          </p>
          <p>
            Bem-vindo à <strong>{nomeProduto}</strong>. Bem-vindo à sua melhor
            versão.
          </p>
        </div>

        <FooterComponent />
      </div>
    </div>
  );
}
