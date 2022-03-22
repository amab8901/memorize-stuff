import React from "react"

export default function List(props) {
    const [list, handleDelete, toggleShowQuestion, toggleShowAnswer] = [props.list, props.handleDelete, props.toggleShowQuestion, props.toggleShowAnswer]

    return(
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <td className="table--head1">
                            <textarea 
                                className="table--title1" 
                                maxlength="50" 
                                placeholder="Enter Question Title"
                                resize="both"
                            ></textarea>                    
                        </td>
                        <td className="table--head2"> 
                        </td>
                        <td className="table--head3">
                            <textarea 
                                className="table--title2" 
                                maxlength="50" 
                                placeholder="Enter Answer Title"
                            ></textarea>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {list.map((item) => (
                            <tr key={item.id} className="table--cell1">
                                <div className="table--text1" onClick={() => toggleShowQuestion(item.id)}>
                                    {item.showQuestion ? item.question : "Show Question " + (list.indexOf(item)+1)}
                                </div>
                            </tr>
                        ))}
                    </td>
                    <td>
                        {list.map((item) => (
                            <tr key={item.id} className="table--cell2">
                                <button type="button" className="table--delete" onClick={() => handleDelete(item.id)}>delete</button>   
                            </tr>
                        ))}
                    </td>
                    <td>
                        {list.map((item) => (
                            <tr key={item.id} className="table--cell3">
                                <div className="table--text2" onClick={() => toggleShowAnswer(item.id)}>
                                    {item.showAnswer ? item.answer : "Show Answer " + (list.indexOf(item)+1)}
                                </div>
                            </tr>
                        ))}
                    </td>   
                </tbody>

            </table>    
        </div>
    )
}
