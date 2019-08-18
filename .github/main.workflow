workflow "tags" {
  on = "push"
  resolves = ["tags: Publish"]
}

action "tags: Ensure branch" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "tags: Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
  needs = "tags: Ensure branch"
}

action "tags: Publish" {
  uses = "borales/actions-yarn@master"
  args = "lerna publish from-package -y"
  needs = "tags: Install"
  secrets = ["NPM_AUTH_TOKEN"]
}