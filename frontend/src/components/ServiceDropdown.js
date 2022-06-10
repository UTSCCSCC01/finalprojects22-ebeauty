import Select from 'react-select'

const services = [
    { value: 'barbering', label: 'Barbering' },
    { value: 'eyelash tech', label: 'Eyelash Tech' },
    { value: 'hairdressing', label: 'Hairdressing' },
    { value: 'house cleaning', label: 'House Cleaning'},
    { value: 'landscaping', label: 'Landscaping'},
    { value: 'makeup', label: 'Makeup'},
    { value: 'massage', label: 'Massage'},
    { value: 'nail tech', label: 'Nail Tech'}
]

const customStyles = {
    option: provided => ({
        ...provided,
        color: 'white'
    })

}

const ServiceDropdown = () => (

    <div className="dropdown-container">
        <Select  className ="dropdown" defaultValue={services[0]} options={services}
                 noOptionsMessage={() => 'Service Not Found'}
                 styles={customStyles}
                 theme={(theme) => ({
                     ...theme,
                     borderRadius: 15,
                     colors: {
                         ...theme.colors,
                         neutral0: '#ff7675',
                         neutral80: 'white',
                         primary25: '#fa81b5',
                         primary: '#fa81b5',
                         neutral90: 'white',
                     },
                 })}
        />
    </div>

)





export default ServiceDropdown