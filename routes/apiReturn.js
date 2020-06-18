function QuestionData () {
    useEffect(() => {
        fetchQuestions();
    }, []);

const fetchItems = async () => {
    const data = await fetch("http://localhost:3000/index");

const questions = await data.json();
console.log(questions._id);
setIds(_id);

return (
    <% {%>
        {items.}
    <%>
);
    }

//_id: req.params.postId
//_id: req.id.postId

//RANDOMIZER
// let input = ['1','2','3','4','5','6','7'];
// let amount = input.length;
// console.log(input[Math.floor(Math.random() * amount)] + " some text");
