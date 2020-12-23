#!/usr/bin/env bash -xe

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "${DIR}/insecurity/backend"

./gradlew build -x test


