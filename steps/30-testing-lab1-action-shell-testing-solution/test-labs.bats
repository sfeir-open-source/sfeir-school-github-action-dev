setup() {
    # TODO local bats_directory="../.."
    load '../../test/test_helper/bats-support/load'
    load '../../test/test_helper/bats-assert/load'

    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"

    PATH="$DIR/scripts:$PATH"
}

@test "check addition.sh is working" {
    run addition.sh 5 5
    assert_output 10
}

@test "check addition.sh is working on error case" {
    run addition.sh 5
    assert_output "command line arguments are missing"
}

@test "check addition.sh is on error" {
    run addition.sh 5
    assert_failure 3
}

@test "check hello-world.sh print at least hello" {
    run hello-world.sh
    assert_output --partial 'Hello' 
    refute_output --partial 'Hola'
}

@test "check palindrome.sh is not error" {
    run palindrome.sh kayak
    assert_output --partial 'is a palindrome' 
}

@test "check palindrome.sh end with palindrome word" {
    run palindrome.sh kayak foo
    assert_output --regexp .*palindrome$
}