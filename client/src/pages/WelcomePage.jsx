import ShoeCard from '../components/ShoeCard';
import PlusCard from '../components/PlusCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GithubLogin from '../components/GithubLogin';

function WelcomePage({ shoes }) {
 

  const [user, setUser] = useState(null);

  useEffect(() => {
     fetch('http://localhost:3001/auth/login/success')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.user) {
          setUser(data.user);
          console.log(data.user);
        }
      })
      .catch(err => console.log(err));
  }, []);


	return (
		<>
			<div className="w-full flex flex-col items-start p-4 lg:flex-row lg:justify-between">
				<Link
					to={'/'}
					className="text-current hover:text-current"
				>
					<h1 className="text-4xl font-bold text-center py-4">Sneak-Peak 👟</h1>
				</Link>
				<Link
					to={'/add'}
					className="text-current hover:text-current"
				>
					<PlusCard />
				</Link>
			</div>

			<div className="w-full mx-auto py-4">
				<div className="flex flex-wrap">
					{shoes.map((shoe, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 lg:w-1/3 p-4"
						>
							<ShoeCard
								shoe={shoe}
								key={index}
							/>
						</div>
					))}
				</div>
			</div>

        <GithubLogin />

		</>
	);
}

export default WelcomePage;
