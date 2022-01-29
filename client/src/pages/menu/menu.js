import React, {useState, useEffect} from "react";
import Product from "../../components/product/product";
import styles from './menu.module.scss'
import Container from "../../components/container/container";
import CustomSelect from "../../components/select/select";
import {useTranslation} from 'react-i18next'
import Media from 'react-media';
import {ReactComponent as Filter} from '../../images/filter.svg'
import {largeOrNarrower, xLargeOrWider} from "../../constants/media-queries";
import {getAllProducts} from "../../api/products";
import {addToBagAC} from "../../state/bag/bag.action";
import {useDispatch} from 'react-redux';


function Menu() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [selectValue, setSelectValue] = useState('')
    const [filters, setFilters] = useState([
        {
            name: 'View All',
            status: true
        },
        {
            name: 'Pizza',
            status: false
        },
        {
            name: 'Salads',
            status: false
        },
        {
            name: 'Drinks',
            status: false
        },
        {
            name: 'Desserts',
            status: false
        },
        {
            name: 'Other',
            status: false
        }
    ])

    useEffect(() => {
        getAllProducts().then((r) => {
            setData(r)
        });
    }, []);
    const options = [
        {value: '1', label: 'Default'},
        {value: '2', label: 'Most Popular'},
        {value: '3', label: 'Lowest Price'},
        {value: '4', label: 'Highest Price'},
        {value: '4', label: '% Off'}
    ]

    return (
        <div className={styles.root}>
            <h3 className={styles.mainTitle}>Menu</h3>
            <Container className={styles.content}>
                <Media query={xLargeOrWider}>
                    <div className={styles.filters}>
                        {filters.map((filter, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles.filter} ${filter.status ? styles.active : ''}`}
                                    onClick={() => {
                                        console.log(filters)
                                    }}
                                >
                                    {filter.name}
                                </div>
                            )
                        })}
                    </div>
                </Media>
                <div className={styles.menu}>
                    <div className={styles.toolbar}>
                        <Media query={largeOrNarrower}>
                            <Filter/>
                        </Media>
                        <div className={styles.options}>
                            {/*<div className={styles.breadcrumbs}></div>*/}
                            {!!data && <p className={styles.count}>Showing {data.length} products</p>}
                            <div className={styles.select}>
                                <CustomSelect
                                    placeholder={'Default'}
                                    options={options}
                                    onChange={(option) =>
                                        setSelectValue(option.label)
                                    }
                                    value={selectValue}
                                />
                            </div>
                        </div>
                    </div>


                    <div className={styles.products}>
                        {!data ? "Loading..." :
                            data.map(pizza => {
                                return (
                                    <Product key={pizza.id} data={pizza}
                                             onAdd={(size) => {
                                                 dispatch(addToBagAC({
                                                     id: pizza.id,
                                                     image: pizza.image,
                                                     name: pizza.name,
                                                     ingredients: pizza.ingredients,
                                                     size: size === 1 ? "30" : "35",
                                                     price: pizza.price,
                                                     count: 1,
                                                 }))
                                             }}/>
                                )
                            })}
                    </div>

                </div>
            </Container>
        </div>


    );
}

export default Menu;