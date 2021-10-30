import PropTypes from 'prop-types' // Gives your property type values too (type impt)
import Button from './Button' 
// rafce -> enter creates a boiler plate component for an arrow function with react.
// It will only print boorgur if it's entered
const Header = ({title, boorgur, onAdd, showAdd}) => {
    const onClickhello = () => {
        console.log('Higher Power every other hour');
    }
    return (
        <header className = 'header'>
            <h1>{title}</h1> 
            <p>{boorgur}</p>
            <Button color={showAdd? 'red' : 'green' } text={showAdd? 'done' : 'add'} func={onAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker 3000'
}

Header.propTypes = {
    title: PropTypes.string, // This enforces typing for your props.

}
export default Header

// Prop is an input that your component can take and use!