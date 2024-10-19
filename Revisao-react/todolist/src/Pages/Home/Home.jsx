import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import './Home.css'
import Modal from 'react-modal'
import lupa from '../../assets/img/lupa.svg';
Modal.setAppElement('#root')

const Home = () => {
    const [modaIsOpen, setModalIsOpen] = useState(false)
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    var [array, setArray] = useState([])
    const [text, setText] = useState("")
    const [textEdit, setTextEdit] = useState("")
    const [idxItem, setIdxItem] = useState(null)

    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' });
    const month = today.toLocaleDateString('pt-BR', { month: 'long' });

    const [searchedItem, setSearchedItem] = useState([])
    const [textSearch, setTextSearch] = useState("")

    function removeItem(txt) {
        var indice = array.indexOf(txt)
        var newArray = array.filter((i) => i != txt)
        setTextSearch("")
        setArray(newArray)
        setSearchedItem(newArray)
        setActiveSearch(false)
    }
    function findItem(txt) {

        var indiceEdit = array.indexOf(txt)
        setIdxItem(indiceEdit)
        setModalEditIsOpen(true)

    }

    function editItem() {
        var idx = array.indexOf(textEdit)
        if (idx == -1) {
            if (textEdit != "") {

                setTextSearch(textEdit)
                array[idxItem] = textEdit
                setTextSearch("")
                setActiveSearch(false)
            }
        }
    }

    function searchItem() {
        setActiveSearch(true)
        var idx = array.indexOf(textSearch)
        if (idx != null) {
            setSearchedItem([array[idx]])
        }
        if (textSearch == "") {
            alert("Digite uma tarefa valida")
            setActiveSearch(false)
        }

    }

    return (
        <main className="main-content">
            <div className='box'>

                <div>
                    <h1 style={{ color: 'white', fontSize: '28px', marginTop: '10%' }}>{dayOfWeek} , <span style={{ color: '#8758FF' }}>{day}</span> de {month}</h1>
                </div>

                <div className='pesquisa'>
                    <img style={{ borderColor: 'yellow', marginRight: '20%' }} sty src={lupa} alt="lupa" />
                    <input className='input-pesquisa' onBlur={() => searchItem()} type="text" placeholder='Procurar tarefa' value={textSearch} onChange={(txt) => {
                        setTextSearch(txt.target.value)
                    }} />
                </div>

                <div className='lista-tarefas'>
                    {
                        activeSearch ?
                            searchedItem.map((txt) => {
                                if (txt != null || txt != undefined) {
                                    return (


                                        <Card onClickEdit={() => findItem(txt)} onClick={() => removeItem(txt)} text={txt} />
                                    )
                                }
                                else {
                                    return <p className='errorSearch'>Tarefa não encontrada</p>;
                                }
                            })
                            :
                            array.map((txt) => {
                                return (
                                    <Card onClickEdit={() => findItem(txt)} onClick={() => removeItem(txt)} text={txt} />
                                )
                            })
                    }
                </div>

            </div>

            <Modal className="modal" isOpen={modalEditIsOpen}>
                <h1 className='titleModal'>Editando tarefa</h1>
                <input className='inputModal' type="text" onChange={(txt) => {
                    setTextEdit(txt.target.value)
                }} />
                <button className='buttonModal' onClick={() => { setModalEditIsOpen(false); editItem() }}>Editar</button>
            </Modal>

            <Modal isOpen={modaIsOpen} className="modal">
                <h1 className='titleModal'>Descreva sua tarefa</h1>
                <input className='inputModal' type="text" onChange={(txt) => {
                    setText(txt.target.value)
                }} />
                <button className='buttonModal' onClick={() => { setModalIsOpen(false); setArray([...array, text]); setText(" ") }}>Confirmar tarefa</button>
            </Modal>

            <button className='buttonHome' onClick={() => setModalIsOpen(true)}>
                Nova tarefa
            </button>

        </main>
    )
}

export default Home;