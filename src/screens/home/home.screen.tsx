import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect, useRef, useState } from "react";
import { FcOk } from "react-icons/fc";
import { FiMinus, FiPlus } from "react-icons/fi";
import RA from "../../../src/img/RA.png";
import bonus from "../../../src/img/bonus.png";
import garantia from "../../../src/img/garantia.png";
import homemNaBMW from "../../../src/img/homemNaBMW.jpg";
import persuasao from "../../../src/img/persuasao.jpg";
import proibido from "../../../src/img/proibido.png";
import reclameAqui from "../../../src/img/reclameAqui.svg";
import templateMockupProduto from "../../../src/img/templateMockupProduto.png";
import config from "../../../src/jsons/config.json";
import "../../App.css";
import { Carrossel } from "../../components/carrossel/carrossel.component";
import { DepoimentoComponent } from "../../components/depoimento/depoimento.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PopUp } from "../../components/popup/popup.component";
// @ts-ignore
import postQuatro from "../../../src/video/postQuatro.mov";
// @ts-ignore
import postCinco from "../../../src/video/postCinco.mov";

export function HomeScreen() {
  const [perguntas, setPerguntas] = useState(config.perguntasFrequentes);
  const [exibirProposta, setExibirProposta] = useState(true);
  const linkProduto = "";

  const nomeProduto = "Venda em 48 Horas";
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // if (window.location.href.includes("/re")) {
    //   timeout(0);
    // } else {
    //   timeout(120000);
    // }
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      new Plyr(playerRef.current, {
        controls: ["play", "fullscreen", "volume", "play-large"],
        volume: 0.5,
        hideControls: true,
        displayDuration: false,
        tooltips: { controls: false, seek: false },
      });
    }
  }, []);

  function timeout(number: number) {
    setTimeout(() => {
      setExibirProposta(true);
    }, number);
  }

  function toggleInfo(id: number) {
    setPerguntas(
      perguntas.map((pergunta) =>
        pergunta.id === id
          ? { ...pergunta, exibir: !pergunta.exibir }
          : pergunta
      )
    );
  }

  return (
    <div className="App">
      <div className="escassez-bar">
        Atenção: Oferta Limitada! Apenas para os 100 primeiros!
      </div>

      <PopUp></PopUp>

      <div className="container">
        <header>
          <h3 className="margin-10-0 grey_white">
            48 Horas Para o Sucesso: Venda Rápida, Lucro Certo!
          </h3>
          <h1 className="margin-10-0">
            O segredo dos top vendedores revelado: Como transformar prospects em
            clientes em apenas <span className="red_rose"> 2 dias</span>!!
          </h1>
        </header>

        <div className="text-align-center margin-10-0">
          {config.paragrafosIniciais.map((texto) => {
            return <p className="margin-0">{texto}</p>;
          })}
        </div>

        {/* <div className="text-align-center margin-10-0">
          <video
            ref={playerRef}
            controls
            playsInline
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src={anuncio} type="video/mp4" />
          </video>
        </div> */}

        <a href={linkProduto} className="button_chamada_acao">
          COMECE A VENDER HOJE!
        </a>

        <div>
          <h2 className="red_rose">Produto de que está mudando o mercado</h2>
          <p>
            {nomeProduto} - a inovação que está redefinindo o ritmo do mercado.
            Com este poderoso método, você não apenas captura o interesse de
            seus potenciais clientes, mas os converte em compradores em meros
            dois dias. Utilizado pelos top vendedores, este é seu atalho para
            lucros rápidos e resultados consistentes. Não é mágica, é
            estratégia! Entre para a vanguarda das vendas hoje mesmo.
          </p>
        </div>

        <div className="flex-center-left">
          <img src={homemNaBMW} alt="homemNaBMW" className="quedaCabelo_img" />
          <div className="flex-col-all-center">
            <h2 className="red_rose">{nomeProduto}</h2>
            <p className="text-align-start">
              A inovação que está redefinindo o ritmo do mercado. Utilizando um
              conjunto de estratégias avançadas e comprovadas, nosso método não
              apenas captura o interesse de seus potenciais clientes, mas os
              converte em compradores em meros dois dias. Adotado pelos top
              vendedores, este é seu atalho para lucros rápidos e resultados
              consistentes. Não é mágica, é ciência aplicada às vendas! Entre
              para a vanguarda das estratégias de mercado hoje mesmo."
            </p>
          </div>
        </div>

        <div className="margin-20-0">
          <DepoimentoComponent />
        </div>

        <div>
          <h2 className="red_rose">Eficiência do {nomeProduto}</h2>
          <div className="flex-center-right ">
            <div>
              {config.descobertas.map((descoberta) => {
                return (
                  <p className="text-align-start">
                    <FcOk className="fcOk" />
                    {descoberta}
                  </p>
                );
              })}
            </div>
            <img
              src={persuasao}
              alt="persuasao"
              className="olhandoFiosCabelo_img"
            />
          </div>
        </div>

        <a href={linkProduto} className="button_chamada_acao">
          DESCUBRA O SEGREDO DAS VENDAS RAPIDAS
        </a>

        <div>
          <h2 className="red_rose">Benefícios x Características</h2>
          <div className="feature-benefit-container">
            {config.beneficiosxcaracteristicas.map((item) => {
              return (
                <>
                  <div className="feature">{item.beneficio}</div>
                  <div className="benefit">{item.caracteristica}</div>
                </>
              );
            })}
          </div>
        </div>

        <div className="margin-40-0">
          <div className="flex-center-left">
            <div className="flex-col-all-center">
              <h2 className="red_rose">
                Recebemos o selo RA1000, a maior classificação de atendimento ao
                cliente no Reclame AQUI
              </h2>
            </div>
            <img src={RA} alt="" className="seloReclameAqui_img" />
            <img src={reclameAqui} alt="" className="RA_img" />
          </div>
        </div>

        <div>
          <h2 className="red_rose">Aqui está o que você receberá</h2>
          <div className="flex-center-left">
            <img
              src={templateMockupProduto}
              alt=""
              className="templateMockupProduto_img"
            />
            <div className="flex-col-all-center">
              <h3>Potencialize Seus Resultados com o Método {nomeProduto}</h3>
              <p>
                Cada módulo é repleto de uma combinação eficaz de técnicas,
                estratégias e ferramentas essenciais, meticulosamente projetadas
                para fortalecer e otimizar seu processo de vendas. Incorporá-lo
                à sua rotina de negócios é simples e é a solução assertiva que
                você procura para acelerar suas conversões.
                <strong className="grey line-through">
                  (valor R$ {config.preco.precoProdutoFake})
                </strong>{" "}
                por apenas <strong>(R$ {config.preco.precoProdutoReal})</strong>
              </p>
            </div>
          </div>
        </div>

        <a href={linkProduto} className="button_chamada_acao">
          JUNTE-SE À REVOLUÇÃO DAS VENDAS
        </a>

        <div className="bonus_div">
          <img src={bonus} alt="" className="bonus_img" />
          <h2 className="grey_white">ESPECIAL</h2>
          <h1>1 Bônus Exclusivo</h1>
          <p>
            Garantindo hoje o seu acesso a{nomeProduto}, você receberá 1 bônus
            incríveis sobre 5 ideias de negócios online que estão funcionando
            atualmente <b>TOTALMENTE gratuitos</b>:
          </p>
          <p>
            1 Bônus exclusivos.{" "}
            <strong className="grey line-through">
              (valor R$ {config.preco.precoBonusFake})
            </strong>
          </p>
        </div>

        <a href={linkProduto} className="button_chamada_acao">
          QUERO RESULTADOS EM 2 DIAS
        </a>

        <div className="showInfo_div">
          <h2 className="red_rose">Perguntas Frequentes</h2>
          {perguntas.map((pergunta: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex-center ">
                  <button
                    onClick={() => {
                      toggleInfo(pergunta.id);
                    }}
                    className="showInfo_button"
                  >
                    <h3>{pergunta.pergunta}</h3>

                    {pergunta.exibir ? <FiMinus /> : <FiPlus />}
                  </button>
                </div>
                {pergunta.exibir && (
                  <div className="showInfo_div">
                    {pergunta.resposta.map((resposta: string) => {
                      return <p>{resposta}</p>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a href={linkProduto} className="button_chamada_acao">
          ESTOU PRONTO PARA O SUCESSO
        </a>

        <div className="flex-center-left">
          <img src={garantia} alt="" className="garantia_img" />
          <div>
            <h2 className="red_rose">Garantia {nomeProduto}</h2>
            <p>
              O código de defesa do consumidor (Art. 49) garante 30 dias para
              solicitar reembolso em caso de insatisfação com o produto. Nós
              confiamos tanto em nossos estudos e pesquisas que lhe garantimos
              30 dias de garantia incondicional!
            </p>
          </div>
        </div>

        <div className="flex-center-left">
          <img src={proibido} alt="" className="garantia_compra_img" />
          <div>
            <h2 className="red_rose">Cuidado</h2>
            <p>
              A venda do {nomeProduto} através de qualquer outro site está
              PROIBIDA. Não compre falsificações e garanta um produto de
              qualidade comprando APENAS através deste site oficial.
            </p>
          </div>
        </div>

        <div className="margin-40-0">
          <h2 className="red_rose">Outros Resultados obtidos</h2>
          <Carrossel>
            <div className="depoimento_video">
              <video
                controls
                playsInline
                disablePictureInPicture
                disableRemotePlayback
              >
                <source src={postQuatro} type="video/mp4" />
              </video>
            </div>
            <div className="depoimento_video">
              <video
                controls
                playsInline
                disablePictureInPicture
                disableRemotePlayback
              >
                <source src={postCinco} type="video/mp4" />
              </video>
            </div>
          </Carrossel>
        </div>

        {/* <div className="depoimentos_videos_order margin-10-0">
          <Carrossel>
            <div className="depoimento_video">
              <video
                controls
                playsInline
                disablePictureInPicture
                disableRemotePlayback
              >
                <source src={depHomem} type="video/mp4" />
              </video>
            </div>

            <div className="depoimento_video">
              <video
                controls
                playsInline
                disablePictureInPicture
                disableRemotePlayback
              >
                <source src={depMulher} type="video/mp4" />
              </video>
            </div>
          </Carrossel>
        </div> */}

        <FooterComponent />
      </div>
    </div>
  );
}
