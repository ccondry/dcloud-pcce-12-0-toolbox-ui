<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <article class="tile is-child box">
          <h1 class="title">CCE Web Administration</h1>
          <div class="content">
            <p>
              You can view and manage your PCCE department in
              <a href="https://ccedata.dcloud.cisco.com/cceadmin/" target="cceadmin">CCE Web Administration</a>.
            </p>
            <p>
              Your department administrator credentials are:
              <ul>
                <li>URL: <strong><a href="https://ccedata.dcloud.cisco.com/cceadmin/" target="cceadmin">https://ccedata.dcloud.cisco.com/cceadmin/</a></strong></li>
                <li>Username: <strong>{{ user.username }}@{{ ldapDomain }}</strong></li>
                <li>Password: <strong>Your dCloud Toolbox password</strong></li>
              </ul>
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
    ...mapGetters(['user', 'ldapDomain'])
  }
}
</script>
