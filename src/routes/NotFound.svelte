<script>
  import I18n from "i18n-js";
  import {onMount} from "svelte";
  import {queryData} from "../api/graphql";
  import { userRole } from "../stores/user";
    import { role } from "../util/role";

  const query = `{
    enrollments {
      entityId,
      dateCreated,
      denied,
      badgeClass {
        entityId,
        name,
        image,
        issuer {
          name,
          image,
          faculty {
            name
          }
        }
      },
      badgeInstance {
        entityId
      }
    }
  }`;

  const query2 = `{
  users {
        firstName,
        email,
        badgeclassStaffs {
            entityId,
            user {
              email
            }
        },
        issuerStaffs {
            entityId,
            user {
              email
            }
        },
        facultyStaffs {
            entityId,
            user {
              email
            }
        },
        institutionStaff {
            entityId,
            mayCreate,
            user {
              email
            }
        }
    }

  }`;

  onMount(() => {
    if ($userRole === role.STUDENT) {
    queryData(query).then(res => {
      debugger;
    });
    } else {
    queryData(query2).then(res => {
      debugger;
    });

    }
  });

</script>


<style>
  .not-found {
    display: flex;
    flex: 1;
    width: 100%;
  }

  h1 {
    text-align: center;
    margin: auto;
  }
</style>
<div class="not-found">
  <h1>{I18n.t('notFound.main')}</h1>
</div>

