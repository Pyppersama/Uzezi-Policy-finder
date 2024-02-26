import { POLICIES } from "../Utilities/Policies";
import PolicyDetail from "./PolicyDetail";
import { useParams } from 'react-router-dom'

const PolicyDetailPage = () => {
    const { key } = useParams();
    const policyKey = parseInt(key);
    const policy = POLICIES.find(
        (p) => p.key === policyKey || p.title.includes(policyKey)
    );
  
    return (
      <div>
        {
            policy ? (
                <PolicyDetail policy={policy} />
            ) : (
                <p>Policy not found :"{policyKey}"</p>
            )
        }

      </div>
    );
  };

export default PolicyDetailPage;
