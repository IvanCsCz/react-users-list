import style from './UserDisplay.module.css';

const UserDisplay = ({ name, username, picture }) => (
	<div className={style.wrapper}>
		<img
			className={style.picture}
			src={picture || '/user-pic.svg'}
			alt={`Foto de ${name}`}
		/>
		<div className={style.display}>
			<span>{name}</span>
			<span className={style.username}>@{username}</span>
		</div>
	</div>
);

export default UserDisplay;
