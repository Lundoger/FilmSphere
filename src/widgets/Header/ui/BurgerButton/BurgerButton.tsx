import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';

const BurgerButton = () => {
	const { menuToggle } = useActions()
	const { openedMenu } = useAppSelector(state => state.toggleReducer)

	return <button onClick={() => menuToggle(!openedMenu)} type="button" className='menu__icon icon-menu'><span></span></button>
}

export default BurgerButton