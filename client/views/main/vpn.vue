<template>
  <div>
    <b-loading :active="loading.app.session" />
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <article class="tile is-child box">
          <h1 class="title">VPN Connection Information</h1>
          <div class="content">
            <p>
              You can connect your laptop to the demo session using AnyConnect:
            </p>
            <ul>
              <li>
                Address: <strong>{{ vpnAddress }}</strong>
              </li>
              <li>
                Username: <strong>{{ user.username }}</strong>
              </li>
              <li>
                Password: <strong>Your dCloud Toolbox password</strong>
              </li>
            </ul>
            <p>
              Note: If you have any issues resolving DNS in the demo while using
              Windows, try rebooting Windows to resolve this issue.
            </p>
          </div>
        </article>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user', 'vpnAddress', 'loading'])
  }
}

</script>
