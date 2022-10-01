import React, { memo } from 'react'
import { SquareModel } from '../models'
import Square from '../Square/Square'

interface Props {
  boards: Array<Array<SquareModel>>,
  onPressSquare: (x: number, y: number)=>void,
  isWon: boolean,
}

const Boards = ({boards, onPressSquare, isWon}: Props) => {
  const renderSquare = (item: SquareModel, x: number, y: number)=>{
    return <Square data={item} onPress={()=>onPressSquare(x, y)} won={isWon}/>
  } 
  return (
    <table>
      {
        boards.map((rowItem, x)=>{
          return(<tr>{rowItem.map((colItem, y)=>(<th>{renderSquare(colItem, x, y)}</th>))}</tr>)
        })
      }
    </table>
  )
}

export default memo(Boards);