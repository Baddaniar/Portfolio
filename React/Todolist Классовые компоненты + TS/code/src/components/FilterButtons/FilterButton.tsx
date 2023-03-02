import {Component} from 'react'
import './FilterButton.css'

interface IFilterProps {
    filterState: string;
    onFilter: (value: string) => void
}

export default class FilterButtons extends Component<IFilterProps>{
    render(){
        const {filterState} = this.props
        return(
            <div>
                <input type="button" className={filterState === 'all' ? "checked": '' } onClick={() => this.props.onFilter('all')} value="All" />
                <input type="button" className={filterState === 'done' ? "checked": '' } onClick={() => this.props.onFilter('done')} value="Done" />
                <input type="button" className={filterState === 'important' ? "checked": '' } onClick={() => this.props.onFilter('important')} value="Impotant" />
            </div>
        )
    }
}