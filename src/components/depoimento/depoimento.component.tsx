import "plyr/dist/plyr.css";
import { AiFillStar } from "react-icons/ai";
import resultadoRecapilarDois from "../../../src/img/depUm.jpg";
import postDois from "../../../src/img/postDois.jpg";
import postSeis from "../../../src/img/postSeis.png";
import postTres from "../../../src/img/postTres.jpg";
import postUm from "../../../src/img/postUm.jpg";
import "../../App.css";
import { Carrossel } from "../carrossel/carrossel.component";
import "./depoimento.component.css";

export function DepoimentoComponent() {
  const nomeProduto = "Venda em 48 Horas";

  return (
    <>
      <h2 className="red_rose">
        Depoimentos de pessoas que adquiriram o {nomeProduto}
      </h2>
      <Carrossel>
        <div className="depoimento_div_order">
          <img
            src={resultadoRecapilarDois}
            alt="antesDepois"
            className="depoimentos_img"
          />
          <p>
            Sempre fui cética em relação a soluções rápidas para vendas, mas
            'Venda em 48 Horas' mudou completamente minha perspectiva. Em menos
            de uma semana, vi um aumento surpreendente nas minhas conversões.
            Estou completamente impressionada!
          </p>
          <p className="red_rose">Fernanda Lopes, 37 anos</p>
          <p>Porto Alegre RS</p>

          <div className="stars">
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
          </div>

          <img src={postUm} alt="post" className="depoimentos_post_dep_img" />
        </div>

        <div className="depoimento_div_order">
          <img
            src="data:image/jpeg;base64,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"
            alt="antesDepois"
            className="depoimentos_img"
          />
          <p>
            Fui apresentada ao 'Venda em 48 Horas' por um colega e,
            inicialmente, achei que era só mais uma promessa no mercado. Como eu
            estava enganada! Minhas vendas dispararam e a confiança na minha
            estratégia de negócios nunca foi tão alta.
          </p>
          <p className="red_rose">Camila Pereira, 48 anos</p>
          <p>Recife PE</p>
          <div className="stars">
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
          </div>

          <img src={postSeis} alt="post" className="depoimentos_post_dep_img" />
        </div>

        <div className="depoimento_div_order">
          <img
            src="https://i.pinimg.com/736x/29/4b/39/294b399d08f45e626567d878e00e3fe5.jpg"
            alt="antesDepois"
            className="depoimentos_img"
          />
          <p>
            Já tentei inúmeras estratégias para alavancar minhas vendas e nada
            chegou perto dos resultados que obtive com 'Venda em 48 Horas'. É,
            sem dúvida, a melhor decisão que tomei para o meu negócio este ano!
          </p>
          <p className="red_rose">Roberto Silva, 45 anos</p>
          <p>Alta Floresta MT</p>
          <div className="stars">
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
          </div>

          <img src={postDois} alt="post" className="depoimentos_post_dep_img" />
        </div>

        <div className="depoimento_div_order">
          <img
            src="https://i.pinimg.com/1200x/bb/7d/99/bb7d99954194500ad466da4050376d89.jpg"
            alt="antesDepois"
            className="depoimentos_img"
          />
          <p>
            O método 'Venda em 48 Horas' não é apenas eficaz, mas
            revolucionário. Senti uma diferença notável na minha abordagem de
            vendas e na resposta dos clientes. Recomendo fortemente a qualquer
            profissional sério sobre melhorar seus números!
          </p>
          <p className="red_rose">Lucas Mendes , 42 anos</p>
          <p>Cascavel PR</p>
          <div className="stars">
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star">
              <AiFillStar />
            </div>
          </div>
          <img src={postTres} alt="post" className="depoimentos_post_dep_img" />
        </div>
      </Carrossel>
    </>
  );
}
