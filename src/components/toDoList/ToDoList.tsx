import { CheckCircle, Circle, ClipboardText, PlusCircle, Trash } from "@phosphor-icons/react"
import { useState } from "react"
import styled from "styled-components"

export default function ToDoList() {


    const ex = {
        id: 1,
        text: "edjkndebjdsccsdcsdcdskbcbdskcbsbdcvbdsb vdsbvcbsdkvb .ksdbv.edjke ndebjdsccsdcsdcdsk bcbdskcbsbdcvbdsbvdsb vcbsdkvb .ksdbv.edjk debjdsccsdcsdc dskbcbdskcbsbdcvbdsbv dsbvcbsdkvb .ksdbv.",
        done: false,
    }

    const [listOfChores, setListOfChores] = useState([ex])

    return (
        <ListContainer>
            <FormToDo>
                <input type="text" />
                <button>Criar <PlusCircle size={32} /></button>
            </FormToDo>
            <DivList>
                <DivCountChores>
                    <p >Tarefas Criadas <span>{listOfChores.length}</span></p>
                    <p>Tarefas concluidas <span>2 de {listOfChores.length}</span></p>
                </DivCountChores>
                {
                    listOfChores.length === 0 ? (
                        <DivEmpityList>
                            <ClipboardText size={56} />
                            <span>Você ainda não tem tarefas cadastradas</span>
                            <p>Crie tarefas e organize seus itens a fazer</p>

                        </DivEmpityList>
                    )
                        :
                        (
                            <DivWithChores>
                                {
                                    listOfChores.map(item => {
                                        return (
                                            <DivChore>
                                                <ButtonCircle><Circle size={24} /></ButtonCircle>
                                                <p>{item.text}</p>
                                                <ButtonDelete ><Trash size={24} /></ButtonDelete>
                                            </DivChore>
                                        )
                                    })
                                }

                            </DivWithChores>

                        )
                }

            </DivList>

        </ListContainer>
    )
}

const DivChore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 1rem;
    background-color: var(--gray-400);
    border-radius: 8px;
    font-size: 0.850rem;
    text-align: justify;

    button {
       background-color: transparent;
       border: none;
        cursor: pointer;
    }
`
const ButtonCircle = styled.button`
    color: var(--blue);
`

const ButtonDelete = styled.button`
    color: var(--red);
`

const DivWithChores = styled.div`
    margin-top: 2rem;
`

const DivEmpityList = styled.div`
    color: var(--gray-400);
    height: 244px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 1.2rem;

    span{
        color: var(--gray-300);
        font-weight: bold;
    }
`

const DivCountChores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--gray-400);
    font-weight: bold;
    letter-spacing: 1px;

    p:nth-child(1) {
        color: var(--blue);
    }
    p:nth-child(2) {
        color: var(--purple); 
    }

    span {
        background-color: var(--gray-400);
        border-radius: 50%;
        padding: 6px;
        color: var(--gray-100);
        font-weight: 400; 
    }
`

const DivList = styled.div`
    margin-top: 10rem;
    width: 100%;
`

const ListContainer = styled.div`
    width: 46rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
`

const FormToDo = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: absolute;
    top:-30px;

    :focus{
        outline: none;
    }

    input {
        background-color: var(--gray-500);
        color: var(--gray-100);
        height: 3.375rem;
        width: 46rem;
        border-radius: 8px;
        border: none;
        padding: 1rem;
        font-size: 1rem;

       
    }

    button {
        background-color: var(--blue-dark);
        color: var(--gray-100);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.375rem;
        width: 5.625rem;
        border-radius: 8px;
        border: none;
        gap: 5px;
        font-size: 1rem;
        cursor: pointer;
    }
`