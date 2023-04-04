Feature: Search by movie title

    Scenario: Search for "fifth" title
        Given I input "fifth" in the search field
        When I click the Search button
        Then I should see the following movies on the page
            | title                       | year | imbdID    |
            | The Fifth Element           | 1997 | tt0119116 |
            | The Fifth Estate            | 2013 | tt1837703 |
            | The Woman in the Fifth      | 2011 | tt1605777 |
            | It Happened on Fifth Avenue | 1947 | tt0039502 |

    Scenario: Search for "alien" title
        Given I input "alien" in the search field
        When I click the Search button
        Then I should see the following movies on the page
            | title                     | year | imbdID    |
            | Alien                     | 1979 | tt0078748 |
            | Alien³                    | 1992 | tt0103644 |
            | Alien: Covenant           | 2017 | tt2316204 |
            | Alien: Resurrection       | 1997 | tt0118583 |
            | Alien vs. Predator        | 2004 | tt0370263 |
            | My Stepmother Is an Alien | 1988 | tt0095687 |