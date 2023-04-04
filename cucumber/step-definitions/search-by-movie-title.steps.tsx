import { RenderResult, act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { before, binding, given, then, when } from 'cucumber-tsflow';
import assert from 'assert'

import App from '../../src/App';
import { apiURL, mockServer, rest } from '../../src/server-mock'
import moviesList from '../_mocks/search-movie/fifth';
import { DataTable } from '@cucumber/cucumber';
import moviesResultsDataset from '../_mocks/search-movie/search-movie';

@binding()
export class SearchByMovieTitleSteps {
    container?: RenderResult

    @before()
    public beforeEach() {
        cleanup()
        this.container = render(<App />)
    }

    @given(/I input "([^"]*)" in the search field/)
    public async givenSearchTerm(movieTitle: string) {
        const searchField = screen.getByLabelText("Title, Actor, etc...")

        assert(searchField)

        mockServer.use(
            rest.get(apiURL(`/`), (_, res, ctx) => {
                return res(ctx.body(JSON.stringify(moviesResultsDataset[movieTitle])))
            })
        )

        await act(async () => {
            fireEvent.change(searchField, { target: { value: movieTitle } })
        })
    }

    @when(/I click the Search button/)
    public async clickSearchButton() {
        const searchButton = screen.getByText("Search")

        assert(searchButton)

        await act(async () => {
            fireEvent.click(searchButton)
        })
    }

    @then(/I should see the following movies on the page/)
    public displaySearchResult(searchResult: DataTable) {
        searchResult.rows().forEach(movie => {
            assert(screen.getByText(movie[0]))
            assert(screen.getByText(movie[1]))
        });
    }
}

export default SearchByMovieTitleSteps