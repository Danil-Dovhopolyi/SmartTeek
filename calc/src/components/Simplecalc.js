import './Simplecalc.scss';

function Simplecalc() {
  return (
    <div className="simplecalc">
      <div className="simplecalc__row">
        <button className="simplecalc_row-seven">7</button>
        <button className="simplecalc_row-eight">8</button>
        <button className="simplecalc_row-nine">9</button>
        <button className="simplecalc_row-delete">Del</button>
        <button className="simplecalc_row-AC">AC</button>
      </div>
      <div className="simplecalc__row">
        <button className="simplecalc_row-four">4</button>
        <button className="simplecalc_row-five">5</button>
        <button className="simplecalc_row-six">6</button>
        <button className="simplecalc_row-multiplication">x</button>
        <button className="simplecalc_row-division">/</button>
      </div>
      <div className="simplecalc__row">
        <button className="simplecalc_row-one">1</button>
        <button className="simplecalc_row-two">2</button>
        <button className="simplecalc_row-three">3</button>
        <button className="simplecalc_row-plus">+</button>
        <button className="simplecalc_row-minus">-</button>
      </div>
      <div className="simplecalc__row">
        <button className="simplecalc_row-four">0</button>
        <button className="simplecalc_row-five">.</button>
        <button className="simplecalc_row-six">Ans</button>
        <button className="simplecalc_row-multiplication">=</button>
      </div>
    </div>
  );
}

export default Simplecalc;
