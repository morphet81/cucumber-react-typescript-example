import { RenderResult, act, fireEvent, render, screen } from '@testing-library/react';
const { defineFeature, loadFeature } = require('jest-cucumber');

import App from './App';
import { apiURL, mockServer, rest } from '../../service/server-mock'
import moviesResultsDataset from '../../service/_mocks/search-movie/search-movie'

const feature = loadFeature('./specifications/search-by-movie-title.feature');

type Test = (name: string, executor: (props: any) => void) => void
type DefineStepFunction = (stepMatcher: string | RegExp, stepDefinitionCallback: (...args: any[]) => any) => any;

interface SearchMovieByTitleProps {
    given: DefineStepFunction
    when: DefineStepFunction
    then: DefineStepFunction
}

interface GherkingMovieInformation {
    title: string
    year: string
    imdbID: string
}
describe(`App`, () => {
    describe(`App component`, () => {
        let container: RenderResult

        beforeEach(() => {
            container = render(<App />)
        })

        test(`matches previous screenshot`, () => {
            expect(container.baseElement).toMatchSnapshot();
        })

    })

    defineFeature(feature, (test: Test) => {
        beforeEach(() => {
            render(<App />)
        });

        const searchMovieTitleTest = (movieTitle: string, given: DefineStepFunction, when: DefineStepFunction, then: DefineStepFunction): void => {
            given(`I input "${movieTitle}" in the search field`, async (title: string) => {
                const searchField = screen.getByLabelText("Title, Actor, etc...")

                expect(searchField).toBeTruthy()

                mockServer.use(
                    rest.get(apiURL(`/`), (_, res, ctx) => {
                        return res(ctx.body(JSON.stringify(moviesResultsDataset[movieTitle])))
                    })
                )

                await act(async () => {
                    fireEvent.change(searchField, { target: { value: `fifth` } })
                })
            })

            when('I click the Search button', async () => {
                const searchButton = screen.getByText("Search")

                expect(searchButton).toBeTruthy()

                await act(async () => {
                    fireEvent.click(searchButton)
                })
            })

            then('I should see the following movies on the page', (searchResult: GherkingMovieInformation[]) => {
                searchResult.forEach(movie => {
                    expect(screen.getByText(movie.title)).toBeTruthy
                    expect(screen.getByText(movie.year)).toBeTruthy
                });
            })
        }

        test('Search for term "fifth"', (props: SearchMovieByTitleProps) => {
            searchMovieTitleTest(`fifth`, props.given, props.when, props.then)
        });

        test('Search for term "alien"', (props: SearchMovieByTitleProps) => {
            searchMovieTitleTest(`alien`, props.given, props.when, props.then)
        });
    });
})