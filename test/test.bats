setup() {
    load 'test_helper/bats-support/load'
    load 'test_helper/bats-assert/load'

    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    export KEY=tata
    PATH="$DIR/../.github/actions/runs-using-docker:$PATH"
}

@test "check main.sh is working" {
    run main.sh toto
    assert_output 'Doing stuff... toto (tata)'
}

@test "check cleanup.sh is working" {
    run cleanup.sh toto
    assert_output 'Cleaning up... toto (tata)'
}

@test "check setup.sh is working" {
    run setup.sh toto
    assert_output 'Setting up... toto (tata)'
}