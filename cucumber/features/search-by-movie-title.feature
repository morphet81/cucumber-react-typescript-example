Feature: Search by movie title

    Scenario: Search for movie title
        Given I input "fifth" in the search field
        When I click the Search button
        Then I should see see the following movies on the page
            | title                       | year | imbdID    |
            | The Fifth Element           | 1997 | tt0119116 |
            | The Fifth Estate            | 2013 | tt1837703 |
            | The Woman in the Fifth      | 2011 | tt1605777 |
            | It Happened on Fifth Avenue | 1947 | tt0039502 |