import { useState } from 'react';
import '../Card/Card.css'
import x from '../../assets/img/x.svg'
import editar from '../../assets/img/editar.svg'
import selecionado from '../../assets/img/selecionado.svg'
import editarBranco from '../../assets/img/editarBranco.svg'
import xBranco from '../../assets/img/xBranco.svg'


const Card = (props) => {
    const [card, setCard] = useState("card")
    const [button, setButton] = useState("buttonSelect")
    const [buttonEdits, setButtonEdits] = useState("button")

    return (
        <div className={card}>
            <button className={button} onClick={() => card == "card" ? setCard('cardSelected') & setButton("buttonSelected") & setButtonEdits("buttonEdits") : setCard("card") & setButton("buttonSelect") & setButtonEdits("button")}>
                {
                    card == "cardSelected"
                    ? <img src={selecionado} alt="" />
                    : null
                }
            </button>
            <p>{props.text}</p>
            <div>
                <button onClick={props.onClick} style={{paddingTop:5 }}  className={buttonEdits}>
                    {
                        card == "cardSelected"
                        ?<img src={xBranco} alt="" />
                        : <img src={x} alt="" /> 
                    }
                   
                </button>   
                <button onClick={props.onClickEdit} style={{paddingTop:5 }}  className={buttonEdits}>
                    {   
                        card == "cardSelected"
                        ?<img src={editarBranco} alt="" />
                        :  <img src={editar} alt="" /> 
                    }
                   
                </button>
            </div>
        </div>
    )
}

export default Card;