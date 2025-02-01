
const BurgerStack = (props) => {
  return (
    <>
      <ul>

        {props.stacks.map((stack, index) => (

          <li key={index} style={{ backgroundColor: stack.color }}> {stack.name}

            <button onClick={() => props.removeStack(index)}>X</button>
          </li>

        ))}

      </ul>
    </>
  )
};

export default BurgerStack;
