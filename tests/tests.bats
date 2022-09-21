setup() {
  DIR="$(cd "$(dirname "$BATS_TEST_FILENAME")" >/dev/null 2>&1 && pwd)"
  PATH="$DIR/../.github/actions/runs-using-docker:$PATH"

  load 'test_helper/bats-support/load'
  load 'test_helper/bats-assert/load'
  export KEY=bar
}

@test "check main.sh is working" {
  run main.sh foo
  assert_output 'Doing stuff... foo (bar)'
}

@test "check cleanup.sh is working" {
  run cleanup.sh foo
  assert_output 'Cleaning up... foo (bar)'
}

@test "check setup.sh is working" {
  run setup.sh foo
  assert_output 'Setting up... foo (bar)'
}
