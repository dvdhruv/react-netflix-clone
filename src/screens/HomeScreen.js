import React from 'react'
import Row from '../Row';
import request from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';


function HomeScreen() {
    return (
        <div>
            <Nav />
			<Banner />
			<Row
				title='NETFILX ORIGINALS'
				fetchUrl={request.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row
				title='Top Rated Series For You'
				fetchUrl={request.fetchTopRated}
			/>
			<Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
			<Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
			<Row title='War Movies' fetchUrl={request.fetchWarMovies} />
			<Row title='Comedy Movies' fetchUrl={request.fetchNetflixOriginals} />
			<Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
			<Row title='Crime Movies' fetchUrl={request.fetchCrimeMovies} />

			<Row
				title='Documentaries Movies'
				fetchUrl={request.fetchDocumentariesMovies}
			/>
			<Row title='Drama Movies' fetchUrl={request.fetchDramaMovies} />
			<Row title='Mystery Movies' fetchUrl={request.fetchMysteryMovies} />
			<Row title='Family Movies' fetchUrl={request.fetchFamilyMovies} />
			<Row title='History Movies' fetchUrl={request.fetchHistoryMovies} />
			<Row title='Music Movies' fetchUrl={request.fetchMusicMovies} />

			<Row
				title='Science Fiction Movies'
				fetchUrl={request.fetchScienceFictionMovies}
			/>

			<Row
				title='Adventure Movies'
				fetchUrl={request.fetchAdventureMovies}
			/>

			<Row
				title='Animation Movies'
				fetchUrl={request.fetchAnimationMovies}
			/>

			<Row title='Western Movies' fetchUrl={request.fetchWesternMovies} />

			<Row title='Fantasy Movies' fetchUrl={request.fetchFantasyMovies} />
        </div>
    )
}

export default HomeScreen
