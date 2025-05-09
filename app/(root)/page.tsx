import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
    searchParams: Promise<{query?: string}>;
}) {

    const query = (await searchParams).query;

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: {_id: 1, name: "Jack"},
        _id: 1,
        description: 'Lorem ipsum dolor sit amet, consetetur adipiscing elit, sed do eiusmods',
        image: 'https://images.unsplash.com/photo-1742241461508-07dfb49187c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: '',
        title: '',
    }]

  return (
      <>
          <section className="pink_container">
              <h1 className="heading">Pitch your startup,
                  <br/>Connect with team&entrepreneurs</h1>
              <p className="sub-heading !max-w-3xl">
                  Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competitions.
              </p>

              <SearchForm query={query} />
          </section>

          <section className="section_container">
              <p className="text-30-semibold">
                  {query ? `Search results for ${query}` : 'All Startups'}
              </p>

              <ul className="mt-7 card_grid">
                  {
                      posts?.length ? (
                          posts.map((post: StartupCardType, idx: number) => (
                              <StartupCard key={post?._id} post={post}/>
                          ))
                      ) : (
                          <p className="no-results">No startups found...</p>
                      )
                  }
              </ul>
          </section>
      </>
  );
}
