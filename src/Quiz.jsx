import React from 'react'



function Quiz() {

  
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    console.log(questions);

    // states
    let [quesNum,setQuesNum] = useState(0)

    

  return (
    <div>
      <h1>Quiz App</h1>
      <hr/>

<div className = 'ques_ans'>
    
    <div className='ques'>
       <h3>Qustion {quesNum+1} ). {questions[0]?.questionText}</h3>
    </div>

    <div className='ans'>
        {
            questions[0].answerOptions.map((ele,index)=>
            {
                return <button key={index}> {ele.answerText} </button>
            })
        }

    </div>
</div>

    </div>
  )
}

export default Quiz