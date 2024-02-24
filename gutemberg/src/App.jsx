import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState('');

  const mostrarImagem = (imagemUrl, descricaoImagem) => {
    setImagem(imagemUrl);
    setDescricao(descricaoImagem);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => mostrarImagem('img/01.jpg', 'O Lancer Evolution, (também apelidado de Lancer Evo[1]) é um sedan de alto desempenho baseado no Mitsubishi Lancer que foi fabricado pela Mitsubishi Motors entre 1992 e 2015. Das dez versões fabricadas, todas utilizam um motor de 2 litros, com turbo e tração nas quatro rodas.[2] Cada versão é numerada com números romanos, mas não necessariamente sendo uma nova geração. Os modelos japoneses têm restrição de potência, para obedecer as leis locais. Já as versões disponíveis em alguns outros mercados, como por exemplo o Reino Unido, têm a potência original (sem a limitação de potência), atingindo até 450 cv.[3] Foi 4 vezes campeão do WRC (World Raly Championship) em 1996, 1997, 1998 e 1999, e 10 vezes campeão do P-WRC (Production Car World Rally Championship), em 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2008, 2009 e 2010.')}>
          MITSUBISHI LANCER EVOLUTION IX GSR 2006
        </button>
        <button onClick={() => mostrarImagem('img/02.jpg', 'Nightmist Blue 1967 viu o primeiro grande redesenho do Mustang. Ele ganhou um compartimento de motor maior, para que a Ford pudesse instalar seu primeiro motor de bloco grande no Mustang. O Shelby Mustang foi uma versão de alto desempenho do Ford Mustang construído pela Shelby America entre 1965-1970. Para melhorar a aparência dos carros, o Shelby teve peças de reposição em fibra de vidro; capô com entradas funcionais, quatro entradas de ar laterais adicionais, traseira em fibra de vidro, spoiler moldado e piscas sequenciais emprestados do Mercury Cougar. As luzes de direção foram montadas no centro da grade (algumas foram movidas para os lados para atender às leis estaduais). Dentro havia o interior de luxo e uma barra de segurança. Em 1967, o GT350 ainda estava disponível com o K Code 289 V8 de 306 cv com coletor de riser alto, mas também estava disponível o GT500 com motor 428 Police Interceptor com dois Holley 4 bbl carbys 2948 GT500s de 600 cfm fabricados (1175 GT350s)')}>
          FORD MUSTANG SHELBY FASTBACK 1967
        </button>
        <button onClick={() => mostrarImagem('img/03.jpg', 'O Mazda RX-7 é um automóvel desportivo produzido pela empresa japonesa Mazda entre 1978 e 2002. Possui tração traseira e motor de até 280 cavalos de potência, Apesar de a Mazda ter parado de fabricá-lo, ainda é possível vê-lo em alguns salões de automóveis, jogos eletrônicos (como Need for Speed) e é frequentemente visto nas ruas do Japão. Três modelos foram produzidos: SA/FB, FC3S e o mais famoso, FD3S. É um dos poucos carros a empregar o motor rotativo Wankel, que dispensa os tradicionais pistões, árvores de cames, cambota, etc. Este tipo de motor tem muito menos componentes, mas possui uma potência específica superior. No entanto, tem a desvantagem do elevado desgaste, elevado consumo e pouco binário em baixas rotações. Foi um dos esportivos asiáticos de maior prestígio, como Acura NSX, Toyota Supra, Nissan 350Z e 370Z, e Nissan Skyline GT-R (R32, R33 e R34).')}>
          MAZDA RX-7 FD VEILSIDE 1994
        </button>
        <button onClick={() => mostrarImagem('img/04.jpg', 'O 350Z (conhecido no Japão como Fairlady Z33), é um carro esportivo fabricado pela Nissan, produzido entre 2001 e 2009. O 350Z é o quinto da geração da linhagem Nissan Z, inicialmente introduzido em 1969[1] (como um modelo ano 1970) como o Datsun 240Z. O 350Z entrou em produção no final de 2001.O 350Z entre 2003 e 2007 foi fabricado com o motor VQ35DE de 280 V6 de 3.5L e entre 2008 e 2009 com o famoso VQ35HR de V6 com os 312 cv, este atingindo os 100km/h em apenas 6,54 segundos.O carro tem modelos da subdivisão NISMO (Nissan Motorsport) sendo que esses tem modificações pensadas em um desempenho esportivo como motor mais potente, rodas NISMO, aerofólio e alguns outros detalhes no interior e exterior do carro.')}>
          NISSAN 350Z FAIRLADY Z33 2002
        </button>
      </div>
      {imagem && (
        <div className="carro-info">
          <img src={imagem} alt={descricao} />
          <p>{descricao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
