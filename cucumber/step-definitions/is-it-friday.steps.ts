import assert from 'assert';
import { binding, given, then, when } from 'cucumber-tsflow';

const isItFriday = (today: string) => {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

@binding()
export class IsItFridaySteps {
    today: string = ``;
    actualAnswer: string = ``;

    @given(/today is "([^"]*)"/)
    public givenAnAccountWithStartingBalance(givenDay: string) {
        this.today = givenDay
    }

    @when(/I ask whether it's Friday yet/)
    public deposit() {
        this.actualAnswer = isItFriday(this.today)
    }

    @then(/I should be told "([^"]*)"/)
    public accountBalanceShouldEqual(expectedAnswer: string) {
        assert.strictEqual(this.actualAnswer, expectedAnswer)
    }
}

export default IsItFridaySteps