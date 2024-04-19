import { CheckCircle, Circle, ClipboardText, PlusCircle, Trash } from "@phosphor-icons/react"
import { ChangeEvent, FormEvent, useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'

interface Chore {
    id: string;
    chore: string;
    done: boolean;
}


export default function ToDoList() {

    const [listOfChores, setListOfChores] = useState<Chore[]>([]);

    const [newChore, setNewChore] = useState('')


    const handelCreateAChore = (event: FormEvent) => {
        event.preventDefault()
        const newText = {
            id: uuidv4(),
            chore: newChore,
            done: false
        }

        setListOfChores([...listOfChores, newText])
        setNewChore('')
    }

    const handleNewChore = (event: ChangeEvent<HTMLInputElement>) => {
        setNewChore(event.target.value)

    }

    const handleDeleteChore = (choreIDToDelete: string) => {
        const newLstOfChores = listOfChores.filter(chore => {
            return chore.id !== choreIDToDelete
        })
        setListOfChores(newLstOfChores)
    }

    const handleDoneChore = (choreIDToChange: string) => {
        setListOfChores(listOfChores.map(chore => {
            if (chore.id === choreIDToChange) {
                return { ...chore, done: !chore.done };
            }
            return chore;
        }));
    }

    const countDoneChores = () => {
        return listOfChores.filter(chore => chore.done).length
    }


    return (
        <ListContainer>
            <FormToDo onSubmit={handelCreateAChore}>
                <input type="text" onChange={handleNewChore} value={newChore} />
                <button type="submit">Criar <PlusCircle size={32} /></button>
            </FormToDo>
            <DivList>
                <DivCountChores>
                    <p >Tarefas Criadas <span>{listOfChores.length}</span></p>
                    <p>Tarefas Concluídas <span>{countDoneChores()} de {listOfChores.length}</span></p>
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
                                            <DivChore key={item.id}>
                                                <ButtonCircle
                                                    onClick={() => handleDoneChore(item.id)}
                                                >
                                                    {item.done ? <CheckCircle size={24} style={{ color: 'var(--dark-purple)' }} /> :
                                                        <Circle size={24} style={{ color: 'var(--blue)' }} />}
                                                </ButtonCircle>
                                                <p>{item.chore}</p>
                                                <ButtonDelete
                                                    onClick={() => handleDeleteChore(item.id)}>
                                                    <Trash size={24} />
                                                </ButtonDelete>
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
    margin-bottom: 2rem;
    min-heigth: 4.5rem; 

    button {
       background-color: transparent;
       border: none;
        cursor: pointer;
        color: var(--gray-300);

        :focus{
            outline: none;
        }
    }
`
const ButtonCircle = styled.button`
    color: var(--blue);
`

const ButtonDelete = styled.button`
    :hover {
        color: var(--red);
    }
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