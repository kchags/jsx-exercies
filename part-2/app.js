function App() {
    return(
        <div>
            <Tweet
                name="Kevin Chagas"
                username="kchags"
                date={new Date().toDateString()}
                message="Celtics are winning the 2023 NBA championship!!"
            />
            <Tweet
                name="Kevin Chagas"
                username="kchags"
                date={new Date().toDateString()}
                message="I love eating seafood, shrimp is my favorite."
            />
            <Tweet
                name="Kevin Chagas"
                username="kchags"
                date={new Date().toDateString()}
                message="I can't believe it's not butter."
            />
        </div>
    );
}