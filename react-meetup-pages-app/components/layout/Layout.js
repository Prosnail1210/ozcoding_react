import classes from './Layout.module.css'
import MainNavagation from './MainNavagation'
const Layout = (props) => {
  return (
    <div>
      <MainNavagation/>
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout