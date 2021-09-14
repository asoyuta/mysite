import { Data } from '../index.d'
import { Line } from './index'

const Dialogue = (data: Data) => {
  return (
    <div className="dialogue">
      {data.lineInfoList.map((lineInfo) => (
        <div className="line">
          {data.personInfoList.map(
            (personInfo) =>
              personInfo.name === lineInfo.personName && (
                <Line personInfo={personInfo} lineInfo={lineInfo} />
              ),
          )}
        </div>
      ))}
    </div>
  )
}

export default Dialogue
