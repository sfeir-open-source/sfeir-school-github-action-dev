setup() {
    # local bats_directory="../.." where "." is the directory representing the pwd that run the script
    load 'test_helper/bats-support/load'
    load 'test_helper/bats-assert/load'

    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    PATH="$DIR/...:$PATH"
}

@test "this is a test" {
    ...
}
