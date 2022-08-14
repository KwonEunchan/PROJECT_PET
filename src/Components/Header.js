import '../styles/Header.scss'
import logo from '../logo.png'


export default function Header(){
	const list = document.querySelector('li');
  return(
		<>
    <header>
			<div className="inner">
				<div className="headerTop">
					<img src= {logo} className="logo"/>
				</div>
				<div className="headerBottom">
					<ul className="menu">
						<li>ABOUT</li>
						<li>분양</li>
						<li>애견용품</li>
						<li>입소문의</li>
					</ul>
					<ul className="sign">
						<li>로그인</li>
						<li>회원가입</li>
					</ul>
				</div>
			</div>
		</header>
		<div className="dummy"></div>
		</>
  )
}
